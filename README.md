# `<TinyMCEInput>` input for React-Admin Framework

<TinyMCEEditor> component for react-admin, useful for editing HTML in admin GUIs.

* All TinyMCE options are supported
* TypeScript definitions

Binding of [`<TinyMCEEditor />`](https://github.com/anhquoctran/ra-tinymce-input) for [react-admin](https://marmelab.com/react-admin/).

## Installation

```bash
$ npm install ra-tinymce --save
```

or 

```bash
$ yarn add ra-tinymce
```

## Basic usage

```tsx
import React, { FC } from 'react';
import {
  SimpleForm, 
  Edit,
  TextInput
} from 'react-admin';

import TinyMCEInput, { TinyMCEInputProps } from 'ra-tinymce';

const PostEdit: FC<TinyMCEInputProps> = (props) => {
  return (
    <Edit>
      <SimpleForm>
        <TextInput source="title" />
        <TinyMCEEditor
          source="content"
          init={{
            height: 500,
            menubar: false,
            plugins: [
              'advlist autolink lists link image charmap print preview anchor',
              'searchreplace visualblocks code fullscreen',
              'insertdatetime media table paste code help wordcount'
            ],
            toolbar: 'undo redo | formatselect | ' +
            'bold italic backcolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | help',
            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
          }}
        />
      </SimpleForm>
    </Edit>
  );
};

export default PostEdit;
```

## License

This library is licensed under the [MIT Licence](LICENSE).
