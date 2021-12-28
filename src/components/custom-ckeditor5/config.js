const fatherToolbar = {
  items: [
    'heading',
    '|',
    'alignment',
    'horizontalLine',
    'outdent',
    'indent',
    '|',
    'bold',
    'italic',
    'underline',
    'strikethrough',
    '|',
    'fontFamily',
    'fontSize',
    'fontColor',
    'fontBackgroundColor',
    '|',
    'bulletedList',
    'numberedList',
    'todoList',
    'blockQuote',
    'highlight',
    '-',
    'removeFormat',
    '|',
    'sourceEditing',
    'htmlEmbed',
    'code',
    'codeBlock',
    '|',
    'insertTable',
    'imageInsert',
    'mediaEmbed',
    'link',
    '|',
    'specialCharacters',
    '|',
    'undo',
    'redo',
  ],
  shouldNotGroupWhenFull: true,
}

const imageToolbar = {
  toolbar: [
    'imageTextAlternative',
    'imageStyle:inline',
    'imageStyle:block',
    'imageStyle:side',
    'linkImage',
  ],
}

const tableToolbar = {
  contentToolbar: [
    'tableColumn',
    'tableRow',
    'mergeTableCells',
    'tableCellProperties',
    'tableProperties',
  ],
}

export { fatherToolbar, imageToolbar, tableToolbar }
