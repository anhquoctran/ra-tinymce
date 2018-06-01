# `<TinyMCEInput>` for admin-on-rest

<TinyMCEInput> component for react-admin, useful for editing HTML in admin GUIs.

Binding of [`<TinyMCE />`](https://github.com/instructure-react/react-tinymce) for [react-admin](https://marmelab.com/react-admin/).

This is a fork of [aor-tinymce-input](https://github.com/LoicMahieu/aor-tinymce-input), changed to work on latest react-admin rather than admin-on-rest.

## Installation

```sh
npm install aor-tinymce-input --save
```

or 

```sh
yarn add aor-tinymce-input
```

## Usage

```js
import React from 'react';
import {SimpleForm, Edit, TextInput } from 'ra-ui-materialui';

import tinymce from 'tinymce/tinymce';
// react-tinymce use global ref
window.tinymce = tinymce;

import 'tinymce/themes/modern/theme';
import 'tinymce/skins/lightgray/skin.min.css';

import TinyMCEInput from 'aor-tinymce-input';

export const PostEdit = props=><Edit>
    <SimpleForm>
        <TextInput source="title" />
        <TinyMCEInput source="content" plugins={["code"]} />
    </SimpleForm>
</Edit>;
```

## License

This library is licensed under the [MIT Licence](LICENSE), and sponsored by [Whitebolt](https://whitebolt.net).
