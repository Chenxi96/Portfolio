import React, { useEffect } from 'react';

import { useQuill } from 'react-quilljs';
// or const { useQuill } = require('react-quilljs');

import 'quill/dist/quill.snow.css'; // Add css for snow theme
// or import 'quill/dist/quill.bubble.css'; // Add css for bubble theme

const Editor = ({value}: {value: any}) => {
  const { quill, quillRef } = useQuill({
    modules: {
        toolbar: null
    },
    readOnly: true,
  });


//   console.log(quill);    // undefined > Quill Object

  useEffect(() => {
    if(quill && value) {
        quill.setContents(JSON.parse(value))
    }
  }, [quill, value])

  return (
    <div style={{ width: "auto", height: "auto" }}>
      <div ref={quillRef} />
    </div>
  );
};

export default Editor;