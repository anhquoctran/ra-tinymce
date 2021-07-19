import { __rest } from "tslib";
import React, { Fragment } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { useInput } from 'react-admin';
var TinyMCEEditor = function (props) {
    var _a = useInput(props), _b = _a.input, name = _b.name, onChange = _b.onChange, onBlur = _b.onBlur, onFocus = _b.onFocus, value = _b.value, rest = __rest(_b, ["name", "onChange", "onBlur", "onFocus", "value"]), _c = _a.meta, touched = _c.touched, error = _c.error;
    var plugins = props.plugins, toolbar = props.toolbar, apiKey = props.apiKey, init = props.init, id = props.id, disabled = props.disabled, inline = props.inline, cloudChannel = props.cloudChannel, textareaName = props.textareaName;
    return (React.createElement(Fragment, null,
        React.createElement(Editor, { cloudChannel: cloudChannel, initialValue: value, plugins: plugins, toolbar: toolbar, apiKey: apiKey, init: init, id: id, onBlur: function (event, editor) { onBlur(undefined); }, onFocus: function (event, editor) { onFocus(undefined); }, onEditorChange: function (event, editor) { onChange(event); }, disabled: disabled, value: value, inline: inline, textareaName: textareaName })));
};
export default TinyMCEEditor;
