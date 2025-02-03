"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const bcrypt = require("bcryptjs");
const jwt_1 = require("@nestjs/jwt");
const user_entity_1 = require("./user.entity");
const session_entity_1 = require("./session.entity");
let AuthService = class AuthService {
    constructor(usersRepository, sessionsRepository, jwtService) {
        this.usersRepository = usersRepository;
        this.sessionsRepository = sessionsRepository;
        this.jwtService = jwtService;
    }
    async login(email, password) {
        const user = await this.usersRepository.findOne({ where: { email } });
        if (!user) {
            return { success: false, error: 'user_not_found' };
        }
        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) {
            return { success: false, error: 'invalid_credentials' };
        }
        const token = await this.createSession(user.id);
        return { success: true, token };
    }
    async register(email, password) {
        const existingUser = await this.usersRepository.findOne({
            where: { email },
        });
        if (existingUser) {
            return { success: false, error: 'User already exists' };
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = this.usersRepository.create({
            email,
            password: hashedPassword,
        });
        await this.usersRepository.save(user);
        const token = await this.createSession(user.id);
        return { success: true, token };
    }
    async createSession(userId) {
        const token = await this.jwtService.signAsync({ userId });
        const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000);
        await this.sessionsRepository.save({
            token,
            expiresAt,
            userId,
            user: { id: userId },
        });
        return token;
    }
    async logout(token) {
        await this.sessionsRepository.delete({ token });
    }
    async verifyToken(token) {
        const session = await this.sessionsRepository.findOne({
            where: { token },
            relations: ['user'],
        });
        if (!session || session.expiresAt < new Date()) {
            return null;
        }
        return session?.user;
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __param(1, (0, typeorm_1.InjectRepository)(session_entity_1.Session)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map