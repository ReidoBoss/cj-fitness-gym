# API Style guide

Follow this guide so that we could keep a scalable and clean **API** _codebase_

## [CRUDdy by Design](https://github.com/adamwathan/laracon2017/blob/master/readme.md) in Controller

### Note:

Remember rule **NWCA** _(Never Write Custom Action)_

#### Example:

```js
// CONTROLLER
function createTask(){ /* implement here */ } ❌
function create(){ /* implement here */ } ✅
```

### If a custom action should be made, make another controller

#### Example

```js
//profile-controller.ts
function updateCoverImage() {}
/*
    if this happens, go create another controller
    dedicated for updating the cover image
*/

/* SOLUTION */
//profile-cover-image-controller.ts
function update() {}
```

### CRUD-based naming convention

```js
    function create(){ /* create implementation */ }
    function all(){ /* get all by id or filter by what ever implementation */ }
    function get(){ /* get one by id or filter by what ever implementation */ }
    function delete(){ /* delete implementation */ }
    function update(){ /* update implementation */ }

```

#### Create

- `create` means create

#### Read

- `all` means get list of something but filtered by `id` or whatever
- `get` means get one

#### Update

- `update` means update

#### Delete

- `delete` means delete
