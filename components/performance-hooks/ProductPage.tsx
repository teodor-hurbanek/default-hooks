import React, { useCallback } from 'react'
import ShoppingForm from './ShoppingForm'

interface ProductPageProps {
  theme: 'dark' | 'light'
  referrer: string
  productId: number
}

const ProductPage = ({ theme, referrer, productId }: ProductPageProps) => {
  const isDark = theme === 'dark'

  const getColorScheme = () => {
    return isDark
      ? { background: 'rgb(50, 50, 50)', color: '#fff' }
      : { background: 'rgb(200, 200, 200)', color: '#000' }
  }

  const handleSubmit = useCallback(
    (orderDetails: any) => {
      post('/product/' + productId + '/buy', {
        referrer,
        orderDetails,
      })
    },
    [productId, referrer]
  )

  return (
    <article style={getColorScheme()}>
      <ShoppingForm onSubmit={handleSubmit} />
    </article>
  )
}

function post(url: string, data: any) {
  // Imagine this sends a request...
  console.log('POST /' + url)
  console.log(data)
}

export default ProductPage
