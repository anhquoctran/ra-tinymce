import React, { FC, Fragment } from 'react';
import { Editor, IAllProps } from '@tinymce/tinymce-react';
import { useInput, InputProps } from 'react-admin';

/**
 * Input props for TinyMCE Editor
 */
export type TinyMCEInputProps = IAllProps & InputProps;

/**
 * Binding component `TinyMCE` editor for `react-admin` framework
 * @param props Props for TinyMCE Editor component
 * @returns 
 */
const TinyMCEEditor: FC<TinyMCEInputProps> = (props) => {

	const {
		input: { name, onChange, onBlur, onFocus, value, ...rest },
		meta: { touched, error }
	} = useInput(props);

	const {
		plugins,
		toolbar,
		apiKey,
		init,
		id,
		disabled,
		inline,
		cloudChannel,
		textareaName
	} = props;

	const initConfig = init || {
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
	};

	return (
		<Fragment>
			<Editor
				cloudChannel={cloudChannel}
				initialValue={value}
				plugins={plugins}
				toolbar={toolbar}
				apiKey={apiKey}
				init={initConfig}
				id={id}
				onBlur={(event, editor) => { onBlur(undefined) }}
				onFocus={(event, editor) => { onFocus(undefined) }}
				onEditorChange={(event, editor) => { onChange(event) }}
				disabled={disabled}
				value={value}
				inline={inline}
				textareaName={textareaName}
			/>
		</Fragment>
	);
}

export default TinyMCEEditor;