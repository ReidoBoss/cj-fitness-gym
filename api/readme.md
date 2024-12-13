# API Style guide

Follow this guide so that we could keep a scalable and clean **API** _codebase_

## [CRUDdy by Design](https://github.com/adamwathan/laracon2017/blob/master/readme.md) in Controller

### Note:

Remember NCA (No Custom Action)

#### Example:

```
    // CONTROLLER
    function createTask(){ /* implement here */ } ❌
    function create(){ /* implement here */ } ✅

```

### CRUD-based naming convention

#### Create

- `create` means create

#### Read

- `all` means get an unfiltered list but filtered by `id` or whatever
- `get` means get one // _not yet implemented but planning to in the future_

#### Update

- `update` means update

#### Delete

- `delete` means delete