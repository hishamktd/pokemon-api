# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [0.0.16](https://github.com/hishamktd/pokemon-api/compare/v0.0.15...v0.0.16) (2025-03-02)


### Features

* add stage and evolution properties to Pokemon model and DTO ([706394b](https://github.com/hishamktd/pokemon-api/commit/706394b1dcc151c6e90928eb7fec58d3713a911a))
* change update endpoint from POST to PUT in PokemonController ([5dfdddb](https://github.com/hishamktd/pokemon-api/commit/5dfdddbf28f247be7211fcf5d36febd1d9065d67))
* update Pokemon documentation to include stage and evolution details ([5765594](https://github.com/hishamktd/pokemon-api/commit/5765594e477d8b7380a659edea9b03589c3497da))

### [0.0.15](https://github.com/hishamktd/pokemon-api/compare/v0.0.14...v0.0.15) (2025-03-01)


### Features

* add Pokemon constants, interface, and repository methods for sorting and pagination ([0dc9eac](https://github.com/hishamktd/pokemon-api/commit/0dc9eac1c18b77c73949a0f06bc2fcb66ecb9c5f))
* add Pokemon module and remove default Pokemon file ([9bc6e49](https://github.com/hishamktd/pokemon-api/commit/9bc6e494a33a76f5e51936298de40bad35428646))
* add PokemonService to providers in PokemonModule ([8a4c1c0](https://github.com/hishamktd/pokemon-api/commit/8a4c1c0d0f326211a2b75a09e11e950d891ffa60))
* enhance PokemonService with CRUD operations and pagination support ([a95654b](https://github.com/hishamktd/pokemon-api/commit/a95654b37b2f044ce552ef3e8768d360a00399ca))
* enhance repositories and service with improved sorting and relation handling ([8de545b](https://github.com/hishamktd/pokemon-api/commit/8de545bb7b7d2122a113245efc4877d999d54a4a))
* implement PokemonController with CRUD operations and pagination support ([dfec374](https://github.com/hishamktd/pokemon-api/commit/dfec374f97cbb15fc6999d09bdb3edc4e77dc5d3))
* improve order validation in PaginationDto to ensure only 'ASC' or 'DESC' are accepted ([ef18927](https://github.com/hishamktd/pokemon-api/commit/ef18927dddba92173e080831565ac4409ab7d562))
* integrate PokemonRepository into PokemonModule and create PokemonService ([af6e5af](https://github.com/hishamktd/pokemon-api/commit/af6e5afd7ece6f12f3a20c0552f4e12cd8a2dbc9))
* refactor Types entity and controller to use updated naming conventions and relationships with Pokemon ([ff2405e](https://github.com/hishamktd/pokemon-api/commit/ff2405eb6e1548766218436d164d6ae260caf3ac))
* update PokemonDto to include typeId with validation ([4c7e751](https://github.com/hishamktd/pokemon-api/commit/4c7e7516115d0bb4108ccb96b81f2501f53aef06))

### [0.0.14](https://github.com/hishamktd/pokemon-api/compare/v0.0.13...v0.0.14) (2025-03-01)


### Features

* add findAll methods to expansions and types repositories and services ([1954655](https://github.com/hishamktd/pokemon-api/commit/195465528a34ce44aaa6fd9ac213be82ae17b168))
* implement default expansion and type interfaces, and add findAll methods in services and controllers ([aa4384a](https://github.com/hishamktd/pokemon-api/commit/aa4384a1a341ec84cc3ca792f229f2e08b67fbf0))
* remove header row from expansion and type CSV files ([80d6566](https://github.com/hishamktd/pokemon-api/commit/80d65663169384f295d28f39431b81be76316ac0))
* remove outdated database backup file ([6c3d9ea](https://github.com/hishamktd/pokemon-api/commit/6c3d9ea5e714fd22103391ab28fa80b6b64739b7))
* update expansion CSV files to correct row numbering ([0015e39](https://github.com/hishamktd/pokemon-api/commit/0015e39b89abdfb8c5a1ba55c4713c801c860e18))

### [0.0.13](https://github.com/hishamktd/pokemon-api/compare/v0.0.12...v0.0.13) (2025-03-01)


### Features

* add initial Pokémon module files ([9807dbe](https://github.com/hishamktd/pokemon-api/commit/9807dbe48eb57fe887ed7fdea54b310647c7bf33))
* add initial Pokémon types data CSV file ([a4983e9](https://github.com/hishamktd/pokemon-api/commit/a4983e9a63503fd3748869d272a7af42e600fecb))
* add PokemonDto class with validation and Swagger documentation ([7a8914c](https://github.com/hishamktd/pokemon-api/commit/7a8914c336adde7dddf08b240d99459e02a610ed))

### [0.0.12](https://github.com/hishamktd/pokemon-api/compare/v0.0.11...v0.0.12) (2025-03-01)


### Features

* add 'color' to allowedSortFields in types.constants.ts ([6cf903e](https://github.com/hishamktd/pokemon-api/commit/6cf903eb597dee774aa1e7beffc55c06236ebf3d))

### [0.0.11](https://github.com/hishamktd/pokemon-api/compare/v0.0.10...v0.0.11) (2025-03-01)


### Features

* add allowedSortFields constant for sorting in Types module ([a921782](https://github.com/hishamktd/pokemon-api/commit/a9217820fa1ebea50f1c4bcab94563c4057157f5))
* add create and update methods to TypesService with error handling ([d124e20](https://github.com/hishamktd/pokemon-api/commit/d124e20e9e3853d5cfb70d91f3fd0b574afe609b))
* add delete method to TypesService for removing a type ([8021fd7](https://github.com/hishamktd/pokemon-api/commit/8021fd787930c4787316424c612da2c32628d27a))
* add error handling to delete method in TypesService ([9de59a8](https://github.com/hishamktd/pokemon-api/commit/9de59a84947e0a1b0b1427590f9a8b7c554d4ba9))
* add error handling to update and delete methods in ExpansionsService ([5e5dfc0](https://github.com/hishamktd/pokemon-api/commit/5e5dfc08c1042ce73a9d32c7bc83f85c81ff3615))
* add findOne method to TypesService for retrieving a single type with error handling ([e46f35a](https://github.com/hishamktd/pokemon-api/commit/e46f35adf901cf92d05f6f4a0dcf710ffc5745c2))
* add findPaginated method to TypesController for paginated retrieval of types ([66b76f7](https://github.com/hishamktd/pokemon-api/commit/66b76f7e4c7cfb6912e62f8291a35efca3f925da))
* add initial TypeScript files for types module ([1ad6f30](https://github.com/hishamktd/pokemon-api/commit/1ad6f3049c079d0e97c64fca014e7122190cb6a0))
* add TypesDto class with validation and API properties ([8b7d178](https://github.com/hishamktd/pokemon-api/commit/8b7d17848e8c756e09e864a1800dca18a6a4cbf9))
* change update method in TypesController to use PUT instead of POST ([ade0024](https://github.com/hishamktd/pokemon-api/commit/ade00247b233288708b757ef64098431c22455e4))
* create TypesEntity class with properties for name, iconUrl, and color ([e9a1f3f](https://github.com/hishamktd/pokemon-api/commit/e9a1f3f53f2bc1ec82890ddf522d68d7fc003d0f))
* enhance TypesController with CRUD operations and validation ([8450c08](https://github.com/hishamktd/pokemon-api/commit/8450c0868fcbbd3b6cf031632db94047dbfd5730))
* implement TypesDefault class with default properties for TypesDto ([26c49e2](https://github.com/hishamktd/pokemon-api/commit/26c49e2937af1f887abedcdee95f2403c0caff71))
* implement TypesRepository with pagination and sorting functionality ([2a21fff](https://github.com/hishamktd/pokemon-api/commit/2a21fff5e6cd41e6289b51664bd1b24e0255ae4a))
* integrate TypeOrmModule for TypesEntity in TypesModule ([97e22c4](https://github.com/hishamktd/pokemon-api/commit/97e22c4c8344ec569740d4b08aea3abf79a99eaa))
* integrate TypesModule into MastersModule ([2fbec6e](https://github.com/hishamktd/pokemon-api/commit/2fbec6ee1b91e295d744075d2240d8e4abbcbde8))
* register TypesController and TypesService in TypesModule ([bcb4c0f](https://github.com/hishamktd/pokemon-api/commit/bcb4c0f25f5a441078cc3198ddf5b94cf272bfb5))
* update TypesRepository to use TypesEntity and implement TypesService for pagination ([badc4f1](https://github.com/hishamktd/pokemon-api/commit/badc4f1d6a1916d6de23c47646ef6af885266e98))

### [0.0.10](https://github.com/hishamktd/pokemon-api/compare/v0.0.9...v0.0.10) (2025-02-28)


### Features

* add new expansion data CSV for game updates ([9976ee7](https://github.com/hishamktd/pokemon-api/commit/9976ee7d7fe345099d8530b172de93c79e28c073))

### [0.0.9](https://github.com/hishamktd/pokemon-api/compare/v0.0.8...v0.0.9) (2025-02-28)


### Features

* integrate ConfigService to manage file upload path dynamically ([3a7b42c](https://github.com/hishamktd/pokemon-api/commit/3a7b42c3b89f0d2758d3710fcdf1d8ff20c66504))

### [0.0.8](https://github.com/hishamktd/pokemon-api/compare/v0.0.7...v0.0.8) (2025-02-28)

### [0.0.7](https://github.com/hishamktd/pokemon-api/compare/v0.0.6...v0.0.7) (2025-02-23)


### Bug Fixes

* change imageUrl property to be optional in ExpansionDto ([6318dbd](https://github.com/hishamktd/pokemon-api/commit/6318dbd58c0970ea96567fb70696ace32d15ca55))

### [0.0.6](https://github.com/hishamktd/pokemon-api/compare/v0.0.5...v0.0.6) (2025-02-23)


### Features

* add new expansion data for PROMO-A, GENITIC APEX, MYTHICAL ISLAND, and SPACE-TIME SMACKDOWN ([667d655](https://github.com/hishamktd/pokemon-api/commit/667d655827bb080f9b0623a0dc75f690e75c17a3))


### Bug Fixes

* change default sort order to DESC and update expansion update method to use ExpansionDto ([f2bc986](https://github.com/hishamktd/pokemon-api/commit/f2bc9869edf14dbe1e6533bb4d4d7a63172ddeff))
* set default values for sortBy and order in PaginationDto ([389b427](https://github.com/hishamktd/pokemon-api/commit/389b427bffa54f9fad3f28726d1f695a26a55c39))

### [0.0.5](https://github.com/hishamktd/pokemon-api/compare/v0.0.4...v0.0.5) (2025-02-23)


### Bug Fixes

* update non-protected routes to use wildcard path matching ([500c29c](https://github.com/hishamktd/pokemon-api/commit/500c29c5ffffafb5d60f1f48f4669f18532adbca))

### [0.0.4](https://github.com/hishamktd/pokemon-api/compare/v0.0.3...v0.0.4) (2025-02-23)


### Features

* add validation messages to pagination DTO properties ([d7055cd](https://github.com/hishamktd/pokemon-api/commit/d7055cd072c00f31d565a920b173bcc4b0ef9f14))
* enhance expansion creation with validation and DTO usage ([ef8d64e](https://github.com/hishamktd/pokemon-api/commit/ef8d64eecf2a6613d6442f7c7b193aecc679c9aa))
* implement authentication middleware with token validation and error handling ([c6c8672](https://github.com/hishamktd/pokemon-api/commit/c6c8672ab05b11d8386625ea5b638d0384a8e94a))
* implement pagination with validation and default values in PaginationDto ([cf60d09](https://github.com/hishamktd/pokemon-api/commit/cf60d095c45be44bea0739a7c2c46366b2b5958c))
* improve error handling in pagination decorator with detailed validation messages ([c19913c](https://github.com/hishamktd/pokemon-api/commit/c19913c42fdbdeb892ec2568a5e0bd52658d305b))
* update non-protected routes to allow wildcard matching for authentication ([dcf7ed3](https://github.com/hishamktd/pokemon-api/commit/dcf7ed347fdbb3495997315318a0d0c3d7cf9bfd))

### [0.0.3](https://github.com/hishamktd/pokemon-api/compare/v0.0.2...v0.0.3) (2025-02-17)

### 0.0.2 (2025-02-17)
