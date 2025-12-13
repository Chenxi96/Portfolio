import { useEffect } from 'react';

import { useQuill } from 'react-quilljs';


const Editor = ({value}: {value: any}) => {
  const { quill } = useQuill({
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
      <div  />
    </div>
  );
};

export default Editor;