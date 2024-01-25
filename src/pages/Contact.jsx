import { useRef, useState } from 'react'

const initialState = {
  name: '',
  email: '',
  message: '',
}

const Contact = () => {
  const [form, setForm] = useState(initialState)
  const [isLoading, setIsLoading] = useState(false)
  const formRef = useRef(null)

  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }
  const handleFocus = () => {
    console.log('Focus')
  }
  const handleBlur = () => {
    console.log('Blur')
  }

  const handleSubmit = e => {
    e.preventDefault()
    setIsLoading(true)
  }

  return (
    <section className='flex flex-col lg:flex-col relative max-container'>
      <div className='flex-1 min-w-[50%] flex flex-col'>
        <h1 className='head-text'>Get in Touch</h1>
        <form
          className='w-full flex flex-col gap-7 mt-14'
          onSubmit={handleSubmit}
          ref={formRef}
        >
          <label className='text-black-500 font-semibold'>
            Name
            <input
              className='input'
              name='name'
              placeholder='i.e. Sherlock Holmes'
              required
              value={form.name}
              type='text'
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className='text-black-500 font-semibold'>
            Email
            <input
              className='input'
              name='email'
              placeholder='i.e. sherlock222B@bakerstreet.com'
              value={form.email}
              type='email'
              required
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className='text-black-500 font-semibold'>
            Your Message
            <textarea
              name='message'
              className='textarea'
              rows={4}
              placeholder='Type your message here...'
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              required
            />
          </label>
          <button
            type='submit'
            className='btn'
            onFocus={handleFocus}
            onBlur={handleBlur}
            disabled={isLoading}
          >
            {isLoading ? 'Sending Your Message...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
