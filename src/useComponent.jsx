import React, { useCallback, useEffect } from "react"
import { useForm, Controller } from 'react-hook-form'
import { Button, Form } from 'react-bootstrap'
import { FileBase64, CustomCkeditor5 } from './components'

const useComponent = () => {
  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitted },
    setValue,
    clearErrors,
    reset,
  } = useForm()

  const onSubmit = useCallback(values => {
    console.log('values ', values)
  }, [])

  useEffect(() => {
    reset({
      thumbnailImage: '',
      content: '',
    })
  }, [])

  return (
    <div className="card-body">
      <Form
        noValidate
        onSubmit={handleSubmit(onSubmit)}
        validated={isSubmitted}
        className="d-flex flex-column gap-4"
      >
        <Form.Group className="d-flex flex-column">
          <Form.Label htmlFor="thumbnailImage">
            Thumbnail Image
          </Form.Label>
          <Controller
            render={({ field }) => (
              <FileBase64
                type="image"
                {...field}
                data={field.value}
                onDone={cb => {
                  // console.log('thumbnail ', cb)
                  setValue('thumbnailImage', {
                    imageBase64: cb.base64,
                    name: cb.name,
                    type: cb.type,
                  })
                  clearErrors('thumbnailImage')
                }}
                isError={errors.thumbnailImage && true}
              />
            )}
            control={control}
            name="thumbnailImage"
            rules={{
              required: true,
            }}
          />
          {errors && errors.thumbnailImage && (
            <Form.Control.Feedback type="invalid" className="d-block">
              Thumbnail image is required.
            </Form.Control.Feedback>
          )}
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor="content">Content</Form.Label>
          <Controller
            render={({ field }) => (
              <CustomCkeditor5
                data={field.value || ''}
                {...field}
                onDone={val => {
                  // console.log('content ', val)
                  setValue('content', val)
                }}
                isError={errors.content && 'Content is required.'}
              />
            )}
            control={control}
            name="content"
            rules={{
              required: true,
            }}
          />
        </Form.Group>

        <div className="d-flex justify-content-center">
          <Button type="submit" className="btn btn-primary">
            <b>Pat Me</b>
          </Button>
        </div>
      </Form>
    </div>
  )
}

export default useComponent