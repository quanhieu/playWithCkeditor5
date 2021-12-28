import { useCallback, useState, useEffect } from 'react'
import styled from 'styled-components'

const FileBase64 = ({
  type = 'file' || 'image',
  multiple = false,
  onDone,
  accept = 'image/*',
  isError = false,
  btnTitle = 'Upload Image',
  data,
}) => {
  const [imageFile, setImageFile] = useState([])

  useEffect(() => {
    if (Array.isArray(data)) {
      setImageFile([data])
    }
    if (data) {
      setImageFile([data])
    }
  }, [data])

  const handleChange = useCallback(e => {
    const { files } = e.target
    // Process each file
    const allFiles = []
    /* eslint-disable-next-line */
    for (const item of files) {
      // Make new FileReader
      const reader = new FileReader()
      // Convert the file to base64 text
      reader.readAsDataURL(item)
      // on reader load something...
      reader.onload = () => {
        // Make a fileInfo Object
        const fileInfo = {
          name: item.name,
          type: item.type,
          size: `${Math.round(item.size / 1000)} kB`,
          base64: reader.result,
          file: item,
        }

        // Push it to the state
        allFiles.push(fileInfo)
        // setFileName([...fileName, item.name])
        setImageFile([
          ...imageFile,
          {
            imageBase64: reader.result,
            name: item.name,
            type: item.type,
          },
        ])

        // If all files have been proceed
        if (allFiles.length === files.length) {
          // Apply Callback function
          if (multiple) onDone(allFiles)
          else onDone(allFiles[0])
        }
      }
      // error
      reader.onerror = error => {
        alert(error)
        console.log('fileBase64 error: ', error)
      }
    }
  }, [])

  const previewImage = useCallback(selectedImage => {
    const base64Image = selectedImage?.imageBase64 || ''
    const myWindow = window.open()
    myWindow.document.write(`
      <div style="display: flex; justify-content: center;">
        <img src=${base64Image} alt="Red dot" />
      </div>
    `)

    myWindow.focus()
    myWindow.print()
  }, [])

  return (
    <StyledInput isError={isError}>
      <div className="custom-btn-upload">
        <i className="fa fa-upload" aria-hidden="true">
          {btnTitle}
        </i>
        {type === 'file' && (
          <input
            type="file"
            className="customFileUpload"
            onChange={e => handleChange(e)}
            multiple={multiple}
            accept={
              accept ||
              '.doc, .docx, .xml, application/msword , application/vnd.openxmlformats-officedocument.wordprocessingml.document'
            }
          />
        )}
        {type === 'image' && (
          <input
            type="file"
            className="customFileUpload"
            onChange={e => handleChange(e)}
            multiple={multiple}
            accept={accept || 'image/*'}
          />
        )}
      </div>
      {imageFile.length > 0 &&
        imageFile.map((item, index) => (
          <div
            // eslint-disable-next-line react/no-array-index-key
            key={`${item.name}-${index}`}
            className="fileName"
            role="presentation"
            onClick={() => previewImage(item)}
          >
            <i className="fa fa-image" aria-hidden="true">
              {item.name}
            </i>
          </div>
        ))}
    </StyledInput>
  )
}

const StyledInput = styled.div`
  .custom-btn-upload {
    input[type='file'] {
      width: 100%;
      height: 100%;
      opacity: 0;
      z-index: 1;
      position: absolute;
    }
    i {
      margin-left: 1.4em;
      display: flex;
      gap: 1em;
      justify-items: center;
      align-items: center;
      width: 30%;
      position: relative;
    }

    position: relative;
    cursor: pointer;
    border: ${props =>
      props.isError ? '1px solid #f54d63' : '1px solid #ccc'};
    height: 5vh;
    display: flex;
    align-items: center;
    border-radius: ${props =>
      props.isError ? '0.375rem 0 0 0.375rem' : '0.375rem'};
    :hover {
      border-color: ${props => !props.isError && 'blueviolet'};
    }
    :focus-within {
      border-color: rgba(70, 21, 214, 0.5);
      box-shadow: 0 0 2px 2px rgba(69, 21, 214, 0.26);
    }
  }
  .fileName {
    margin-top: 1em;
    margin-left: 2em;
    i {
      display: flex;
      gap: 2em;
      color: #ff0000a9;
      cursor: pointer;
    }
  }
`

export default FileBase64
