# Play with Ckeditor5 (Without build-in your source)

## Feature
- Rich text editor
  - Preview editor content
- Upload images/file as Base64
  - Preview image
- Parse HTML into react app

## Environment suggestion
```
  next
  @ckeditor/ckeditor5-react
  styled-components
  html-react-parser
```

## Start
1. Customize and build your CKEditor 5
[here](https://ckeditor.com/ckeditor-5/online-builder/)

2. Download .zip

3. Install
```bash
yarn
# or
npm install
```

4. Build it (For me, I rename folder build as "custom-build-ckeditor")
```bash
yarn build
# or
npm run build
```

5. Copy build folder to your source

6. Import
```bash
  With NEXTJS as:
  import dynamic from 'next/dynamic'

  const EditorCustom = dynamic(() => import('./ckeditor5'), {
    ssr: false,
  })
```

7. Use in your component
```bash
  <EditorCustom/>
```

8. Update toolbar
```bash
  config={{
    placeholder: '.',
    removePlugins: ['Markdown'],
    toolbar: fatherToolbar,
    image: imageToolbar,
    table: tableToolbar,
  }}
```
Config values is in ``
  config.js
``

## Note
``
  I think you should to make your own a cup of coffee.
  Because of in the first time start your source, which is include custom-editor. You will be waiting for longggggggg time.
``

## If want to play with build-in source
Here is my repo

[Ckeditor4](https://github.com/quanhieu/richText/tree/main/ckeditor4)

[Ckeditor5](https://github.com/quanhieu/richText/tree/main/ckeditor5-custom-nextjs)