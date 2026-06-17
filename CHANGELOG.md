# Changelog

## 0.2.0 (2026-06-17)

Full Changelog: [v0.1.0...v0.2.0](https://github.com/stainless-commons/stripe-typescript/compare/v0.1.0...v0.2.0)

### Features

* **mcp:** add an option to disable code tool ([a5a87d1](https://github.com/stainless-commons/stripe-typescript/commit/a5a87d186124aabab2d366aa9d333b68b957b841))


### Bug Fixes

* **client:** preserve URL params already embedded in path ([6ba806f](https://github.com/stainless-commons/stripe-typescript/commit/6ba806fecd609688cfc9e3bbcbcc524ad71efc5f))
* **client:** send content-type header for requests with an omitted optional body ([e5fe55f](https://github.com/stainless-commons/stripe-typescript/commit/e5fe55fa369b9ed0c0dea1456d6045383a465c05))
* **docs/contributing:** correct pnpm link command ([6f82410](https://github.com/stainless-commons/stripe-typescript/commit/6f8241055ebbe64bb04c0c0968d0f571210b81f8))
* **mcp:** initialize SDK lazily to avoid failing the connection on init errors ([91117e0](https://github.com/stainless-commons/stripe-typescript/commit/91117e0857e332ec4ae10315e4a32032e1218f62))
* **mcp:** update prompt ([36933df](https://github.com/stainless-commons/stripe-typescript/commit/36933df7d08fe80523fff4d8f7db44c881e38045))
* use correct format for nested and array query params ([b041815](https://github.com/stainless-commons/stripe-typescript/commit/b041815c9c203d1f2083116e8e3b28a88edcaa49))


### Chores

* bump @stdy/cli to 0.15.3 ([321da39](https://github.com/stainless-commons/stripe-typescript/commit/321da39287434df8a13932e8a9014300b1628e71))
* **ci:** skip lint on metadata-only changes ([7eef224](https://github.com/stainless-commons/stripe-typescript/commit/7eef22440e67794e976b25937e08b4982ea5637f))
* **ci:** skip uploading artifacts on stainless-internal branches ([80545c4](https://github.com/stainless-commons/stripe-typescript/commit/80545c49e6f8d2b79a325b50acc78e2fc6e2edc2))
* **internal/client:** fix form-urlencoded requests ([0e58725](https://github.com/stainless-commons/stripe-typescript/commit/0e587251b5c8c5839c462eeb92bc5a850ddc34d8))
* **internal:** allow setting x-stainless-api-key header on mcp server requests ([a03ff30](https://github.com/stainless-commons/stripe-typescript/commit/a03ff30e3a05555eba457641c2cc0c15d7a006fe))
* **internal:** bump mock server version ([7d9a9ec](https://github.com/stainless-commons/stripe-typescript/commit/7d9a9eca2083aece8904f03861f953fd0c6e3e3b))
* **internal:** cache fetch instruction calls in MCP server ([ff0c4c8](https://github.com/stainless-commons/stripe-typescript/commit/ff0c4c8bb9e8d376dddea290af5a8c08efcee980))
* **internal:** codegen related update ([467f3d2](https://github.com/stainless-commons/stripe-typescript/commit/467f3d23e9c3b9c3498c42d5a6864c1532d33093))
* **internal:** codegen related update ([32f8011](https://github.com/stainless-commons/stripe-typescript/commit/32f8011ec580cfa779929e1e1a21149c47f53049))
* **internal:** codegen related update ([a0476cf](https://github.com/stainless-commons/stripe-typescript/commit/a0476cf9bb5cb0079bd661321551e03998d3db9f))
* **internal:** codegen related update ([ed6363d](https://github.com/stainless-commons/stripe-typescript/commit/ed6363d7a5ee75b8f80a881e54907096a4cfb73d))
* **internal:** codegen related update ([a47b142](https://github.com/stainless-commons/stripe-typescript/commit/a47b142e0e196a0e1cced72c8983e30a80255f9a))
* **internal:** codegen related update ([e716deb](https://github.com/stainless-commons/stripe-typescript/commit/e716debbf2d3855c5e42440bc78575ba333e49db))
* **internal:** codegen related update ([2dacb27](https://github.com/stainless-commons/stripe-typescript/commit/2dacb27c85cb83b29b20f93c7ca1a485b85419a6))
* **internal:** codegen related update ([ac53f88](https://github.com/stainless-commons/stripe-typescript/commit/ac53f88502033937603a2699524114eef28a5e59))
* **internal:** codegen related update ([7dc1651](https://github.com/stainless-commons/stripe-typescript/commit/7dc1651dfaec666eb3629e49b31d884f3294e4eb))
* **internal:** codegen related update ([158299e](https://github.com/stainless-commons/stripe-typescript/commit/158299e5365b255d3dd865dcd0bdc4daf49c106c))
* **internal:** codegen related update ([8abdc54](https://github.com/stainless-commons/stripe-typescript/commit/8abdc54f44f28b040315ce60072dc53550b49d0a))
* **internal:** codegen related update ([5df29d7](https://github.com/stainless-commons/stripe-typescript/commit/5df29d7018ecf1ca1585d8b45542488c4abe6df5))
* **internal:** codegen related update ([d57e070](https://github.com/stainless-commons/stripe-typescript/commit/d57e070d96c3b575fc3e47489ddba586cac24a13))
* **internal:** codegen related update ([fa1718c](https://github.com/stainless-commons/stripe-typescript/commit/fa1718cfcc6f233780ca56d400c9b30a127382c6))
* **internal:** codegen related update ([e3d820b](https://github.com/stainless-commons/stripe-typescript/commit/e3d820b3b9f14af503bdb21a621718f4638c34b2))
* **internal:** codegen related update ([64ad0e0](https://github.com/stainless-commons/stripe-typescript/commit/64ad0e03080b489324df05133e85d09fb3ce9ec4))
* **internal:** codegen related update ([d8aad2a](https://github.com/stainless-commons/stripe-typescript/commit/d8aad2ac4036921961ab231b52ad511b8d053ca2))
* **internal:** codegen related update ([9692f89](https://github.com/stainless-commons/stripe-typescript/commit/9692f89a87b43a5f24da70e6e8d9732fa0605563))
* **internal:** codegen related update ([9bd9a90](https://github.com/stainless-commons/stripe-typescript/commit/9bd9a9059c4a8d840fc2ac7f356c1031cc422353))
* **internal:** codegen related update ([b78b086](https://github.com/stainless-commons/stripe-typescript/commit/b78b086fc92ae738721ccc3c0c73ae16a8f59f9c))
* **internal:** codegen related update ([331a5fc](https://github.com/stainless-commons/stripe-typescript/commit/331a5fc9341b00d7ae181651894df0e455d0d89e))
* **internal:** codegen related update ([1d110d7](https://github.com/stainless-commons/stripe-typescript/commit/1d110d741e9567ed48d1606ee4a86246947feed8))
* **internal:** codegen related update ([15b6a83](https://github.com/stainless-commons/stripe-typescript/commit/15b6a83d64da7ae5310bcc7807fe7f891910d550))
* **internal:** fix MCP Dockerfiles so they can be built without buildkit ([469db39](https://github.com/stainless-commons/stripe-typescript/commit/469db3973a2364934dd27dff94280030e2cefcd8))
* **internal:** fix MCP Dockerfiles so they can be built without buildkit ([aaf708d](https://github.com/stainless-commons/stripe-typescript/commit/aaf708d1b159c0a1ed08dd6bfc4c4f1a01105649))
* **internal:** fix MCP server import ordering ([b990d83](https://github.com/stainless-commons/stripe-typescript/commit/b990d83aed8a7f378b124b061c3e1fbba5086dc3))
* **internal:** fix MCP server TS errors that occur with required client options ([5205d2b](https://github.com/stainless-commons/stripe-typescript/commit/5205d2b856c734d8393f0970893a110e7436a367))
* **internal:** improve layout of generated MCP server files ([b5396d3](https://github.com/stainless-commons/stripe-typescript/commit/b5396d3dded981d943816dc3eda4648bb93e97b2))
* **internal:** improve local docs search for MCP servers ([b892222](https://github.com/stainless-commons/stripe-typescript/commit/b8922220d934d57c8b75e2ceb4f200a3d7c96334))
* **internal:** improve local docs search for MCP servers ([4319466](https://github.com/stainless-commons/stripe-typescript/commit/43194669fa750bf064f33f02f279640b62a3ae75))
* **internal:** improve reliability of MCP servers when using local code mode execution ([662dcf8](https://github.com/stainless-commons/stripe-typescript/commit/662dcf888c2daa8eb31fe14563947c87619d369a))
* **internal:** make generated MCP servers compatible with Cloudflare worker environments ([8ab1eed](https://github.com/stainless-commons/stripe-typescript/commit/8ab1eedab66a3449d910465336248ad7357fed5b))
* **internal:** make MCP code execution location configurable via a flag ([53916c1](https://github.com/stainless-commons/stripe-typescript/commit/53916c1de9a855b883d762fa742b8e4fdbd72417))
* **internal:** move stringifyQuery implementation to internal function ([a461e83](https://github.com/stainless-commons/stripe-typescript/commit/a461e83cead896c2014160554407c1a61078ab21))
* **internal:** show error causes in MCP servers when running in local mode ([62751ed](https://github.com/stainless-commons/stripe-typescript/commit/62751ed111a09aec7f9ac640916849fae4faa172))
* **internal:** support custom-instructions-path flag in MCP servers ([d9d8352](https://github.com/stainless-commons/stripe-typescript/commit/d9d83521fe46678e0aa5f4c861ce225a2480b8cc))
* **internal:** support local docs search in MCP servers ([b20020e](https://github.com/stainless-commons/stripe-typescript/commit/b20020e0c5cc93c2d9b437bd1982cdbb1897c43b))
* **internal:** support type annotations when running MCP in local execution mode ([be0b48d](https://github.com/stainless-commons/stripe-typescript/commit/be0b48da38082e3acfbc7be50e9ce25600356fd5))
* **internal:** support x-stainless-mcp-client-envs header in MCP servers ([8cbd111](https://github.com/stainless-commons/stripe-typescript/commit/8cbd111cea8f248fcf13abd2139ed03a333b199f))
* **internal:** support x-stainless-mcp-client-permissions headers in MCP servers ([f75ca7b](https://github.com/stainless-commons/stripe-typescript/commit/f75ca7b5ae3ee3ef511ee3b7185f44496ed31251))
* **internal:** tweak CI branches ([08edfa5](https://github.com/stainless-commons/stripe-typescript/commit/08edfa5ed52612f93650b982dfb80ad2d15e32cc))
* **internal:** update dependencies to address dependabot vulnerabilities ([cefb7ee](https://github.com/stainless-commons/stripe-typescript/commit/cefb7ee8ce1daa8044100a75372017d458205b10))
* **internal:** update gitignore ([0d9254b](https://github.com/stainless-commons/stripe-typescript/commit/0d9254b16f29d6272a5b5502ac2638021d03c0a2))
* **internal:** update lock file ([4392988](https://github.com/stainless-commons/stripe-typescript/commit/4392988da494184c90e301fd4440431058959632))
* **internal:** update lockfile ([dcb9259](https://github.com/stainless-commons/stripe-typescript/commit/dcb92591ac8b5d88e83b8e36c2d74c8bf346438c))
* **internal:** update multipart form array serialization ([a5d8042](https://github.com/stainless-commons/stripe-typescript/commit/a5d80421eed5390ce61da8f6209d4a1bd653037c))
* **internal:** upgrade @modelcontextprotocol/sdk and hono ([2b4969c](https://github.com/stainless-commons/stripe-typescript/commit/2b4969cff40017a60e49e5ba2d8a45afbe191473))
* **internal:** upgrade pnpm version ([0865740](https://github.com/stainless-commons/stripe-typescript/commit/0865740119d276cfb87435e883de5d5e1f951294))
* **mcp-server:** add support for session id, forward client info ([d981a60](https://github.com/stainless-commons/stripe-typescript/commit/d981a6025fcef4d6e7e7395d410434a63581fd54))
* **mcp-server:** improve instructions ([84da06e](https://github.com/stainless-commons/stripe-typescript/commit/84da06eece40eef15b227568a124cbc2f727a7a6))
* **mcp-server:** increase local docs search result count from 5 to 10 ([60bc5a5](https://github.com/stainless-commons/stripe-typescript/commit/60bc5a51b3bb7a81563c4fd8ce4dd02b7b621d03))
* **mcp-server:** log client info ([d98dbb9](https://github.com/stainless-commons/stripe-typescript/commit/d98dbb90bfc574dee9c33bf0b5bd40e3f72ef3cd))
* **mcp-server:** return access instructions for 404 without API key ([eaaacc5](https://github.com/stainless-commons/stripe-typescript/commit/eaaacc5e7f8aff20488f95a39620fed88fc7e4c4))
* **mcp:** correctly update version in sync with sdk ([f23cad6](https://github.com/stainless-commons/stripe-typescript/commit/f23cad69cec3c1fc45116386aea3a1f918e09447))
* **mcp:** forward STAINLESS_API_KEY to docs search endpoint ([138eae9](https://github.com/stainless-commons/stripe-typescript/commit/138eae9a8137f53dcf2522395c22f90254b59340))
* **test:** do not count install time for mock server timeout ([eb9f8c5](https://github.com/stainless-commons/stripe-typescript/commit/eb9f8c520cd8fa58ac70c82874eb39b3fd9d140f))
* **test:** enable generated tests ([9462693](https://github.com/stainless-commons/stripe-typescript/commit/9462693a31992082eb9cc49a754bbe10ddfddd0f))
* **tests:** bump @stdy/cli to 0.16.1 ([df3fa81](https://github.com/stainless-commons/stripe-typescript/commit/df3fa819490490d0873a36a0733c97c17d4ebf0f))
* **tests:** bump mock server version ([5ddd4a2](https://github.com/stainless-commons/stripe-typescript/commit/5ddd4a2962338dd6cbec6e4fe0f702dcc4220513))
* **tests:** bump steady to v0.19.4 ([059ba93](https://github.com/stainless-commons/stripe-typescript/commit/059ba93abc270a7bb111a7d0b688a7b453c5ce79))
* **tests:** bump steady to v0.19.5 ([c16fe60](https://github.com/stainless-commons/stripe-typescript/commit/c16fe6079d07e028b25f4b0af0c0dc3c0e19690e))
* **tests:** bump steady to v0.19.6 ([49cb28b](https://github.com/stainless-commons/stripe-typescript/commit/49cb28ba6fdd6c5d243eb614108cd8f035afe674))
* **tests:** bump steady to v0.19.7 ([2c54dc8](https://github.com/stainless-commons/stripe-typescript/commit/2c54dc8b736d4814adaf0733eeb47e8cfe132f4a))
* **tests:** bump steady to v0.20.1 ([ff652a5](https://github.com/stainless-commons/stripe-typescript/commit/ff652a520b6b87a45d711a667806f0a42108da1e))
* **tests:** bump steady to v0.20.2 ([49e7378](https://github.com/stainless-commons/stripe-typescript/commit/49e7378bf928d8ce5d9af44c6cf159079d775e13))
* update mock server docs ([f54cb4c](https://github.com/stainless-commons/stripe-typescript/commit/f54cb4c8be00991d7f6e6ae9a2df95a6b266f430))


### Documentation

* improve examples ([b4dba69](https://github.com/stainless-commons/stripe-typescript/commit/b4dba6966822b2d9c7ac76c19a9a94da55432ab5))


### Refactors

* update sdk ([e272789](https://github.com/stainless-commons/stripe-typescript/commit/e27278930db257f43a4b532a377c91998de12da3))

## 0.1.0 (2026-02-12)

Full Changelog: [v0.0.1...v0.1.0](https://github.com/stainless-commons/stripe-typescript/compare/v0.0.1...v0.1.0)

### Features

* **api:** manual updates ([adf335b](https://github.com/stainless-commons/stripe-typescript/commit/adf335be12ff45ebd38ee6c77155d626d54e6d11))
* **api:** manual updates ([27e89a2](https://github.com/stainless-commons/stripe-typescript/commit/27e89a2386d4d736494d0081aa89ab9ca28d6008))
* **api:** manual updates ([6999597](https://github.com/stainless-commons/stripe-typescript/commit/699959700d9c63e7e103a2150022af1002ff0ec2))
* **api:** manual updates ([650e97e](https://github.com/stainless-commons/stripe-typescript/commit/650e97e90b18a1662cf0a99bf34a34a57779571e))
* **api:** manual updates ([9a24447](https://github.com/stainless-commons/stripe-typescript/commit/9a24447ba9c4e3e43fcf84b6908cef928017d539))
* **api:** manual updates ([8862a47](https://github.com/stainless-commons/stripe-typescript/commit/8862a47cf2f311f61dc909f111717f27d7171825))
* **api:** manual updates ([74c5c02](https://github.com/stainless-commons/stripe-typescript/commit/74c5c02b5028818331c5163bfd0282dde3a314d8))
* **api:** manual updates ([edffccf](https://github.com/stainless-commons/stripe-typescript/commit/edffccfb4a740252a89e37ec5d58a60cb7c902ec))
* **api:** manual updates ([2ea6fa7](https://github.com/stainless-commons/stripe-typescript/commit/2ea6fa727e290dc4a84bb5049c29c07d96caf958))
* **api:** manual updates ([9db5089](https://github.com/stainless-commons/stripe-typescript/commit/9db50896a40a57520b23c27b9104eba294018fd9))
* **api:** manual updates ([b3b5dd2](https://github.com/stainless-commons/stripe-typescript/commit/b3b5dd2f659948a8fa2b09f35b973c6ca2efc649))
* **api:** manual updates ([18f2e9d](https://github.com/stainless-commons/stripe-typescript/commit/18f2e9d429eda4e153d1bcaaa4e39043c50631e0))
* **api:** manual updates ([80dc2a8](https://github.com/stainless-commons/stripe-typescript/commit/80dc2a82090d97d0740343d1e9420ba54c0e0fb1))


### Chores

* configure new SDK language ([6b9e477](https://github.com/stainless-commons/stripe-typescript/commit/6b9e47739696327a691ef32957e9235642d91dcd))
* **internal:** add health check to MCP server when running in HTTP mode ([e65022e](https://github.com/stainless-commons/stripe-typescript/commit/e65022e9097ce4900477c0da08ce2a28da21f085))
* **internal:** allow basic filtering of methods allowed for MCP code mode ([428820b](https://github.com/stainless-commons/stripe-typescript/commit/428820b1f023559d65b5fb7d76aa817c456267a2))
* **internal:** always generate MCP server dockerfiles and upgrade associated dependencies ([3117187](https://github.com/stainless-commons/stripe-typescript/commit/3117187afcefe732a10490644950a48570febe8b))
* **internal:** avoid type checking errors with ts-reset ([e3451ea](https://github.com/stainless-commons/stripe-typescript/commit/e3451eac340cc27423a9e77cd32087ae9a28ff96))
* **internal:** configure MCP Server hosting ([77f487c](https://github.com/stainless-commons/stripe-typescript/commit/77f487cf85a6f227314934be12d398fd51e5683d))
* **internal:** upgrade pnpm ([cf547e8](https://github.com/stainless-commons/stripe-typescript/commit/cf547e8c46ab145716cce6a0d2b21e85011fa723))
* update SDK settings ([8b39765](https://github.com/stainless-commons/stripe-typescript/commit/8b397650a65bf5c90dcddc1dc0f0aa13f7ee8d8c))
