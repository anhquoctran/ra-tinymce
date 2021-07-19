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

	return (
		<Fragment>
			<Editor
				cloudChannel={cloudChannel}
				initialValue={value}
				plugins={plugins}
				toolbar={toolbar}
				apiKey={apiKey}
				init={init}
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