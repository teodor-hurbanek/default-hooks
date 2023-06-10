import React, { memo, useState } from 'react'
import Button from '../UI/Button'
import Label from '../UI/Label'
import Input from '../UI/Input'

interface ShippingFormProps {
  onSubmit: (orderDetails: any) => void
}

const ShoppingForm = memo(({ onSubmit }: ShippingFormProps) => {
  const [count, setCount] = useState(1)

  console.log('[ARTIFICIALLY SLOW] Rendering <ShippingForm />')
  let startTime = performance.now()
  while (performance.now() - startTime < 500) {
    // Do nothing for 500 ms to emulate extremely slow code
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const orderDetails = {
      ...Object.fromEntries(formData),
      count,
    }
    onSubmit(orderDetails)
  }

  return (
    <form onSubmit={e => handleSubmit(e)}>
      <p>
        <b>
          Note: <code>ShippingForm</code> is artificially slowed down!
        </b>
      </p>
      <div>
        <p>Number of items: </p>
        <Button onClick={() => setCount(count - 1)} disabled={count === 1}>
          -
        </Button>
        <p>{count}</p>
        <Button onClick={() => setCount(count + 1)}>+</Button>
      </div>
      <div>
        <Label>Street: </Label>
        <Input name={'street'} />
      </div>
      <div>
        <Label>City: </Label>
        <Input name={'city'} />
      </div>
      <div>
        <Label>Postal code: </Label>
        <Input name={'zipCode'} />
      </div>
      <Button type={'submit'}>Submit</Button>
    </form>
  )
})

export default ShoppingForm
