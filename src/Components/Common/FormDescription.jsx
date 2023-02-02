import React from "react";

const FormDescription = ({ title, placeholder, value, onChange, name }) => {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="font-semibold">{title}</h1>
      <textarea
        onChange={onChange}
        name={name}
        value={value}
        placeholder={placeholder}
        style={{
          border: "1px solid #E5E5E5",
          padding: "1rem",
          borderRadius: "0.2rem",
        }}
        rows="6"
      />

      {/* <CKEditor
                editor={ClassicEditor}
                data={`<p
                     className='text-[#555555]'>${placeholder ? placeholder : 'Enter Description'}</p>`}
                onReady={editor => {
                    // You can store the "editor" and use when it is needed.
                    console.log('Editor is ready to use!', editor);
                }}
                onChange={(event, editor) => {
                    const data = editor.getData();
                    console.log({ event, editor, data });
                }}
                onBlur={(event, editor) => {
                    console.log('Blur.', editor);
                }}
                onFocus={(event, editor) => {
                    console.log('Focus.', editor);
                }}
            /> */}
    </div>
  );
};

export default FormDescription;
