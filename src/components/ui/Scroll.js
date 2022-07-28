import React from 'react'

const Scroll = () => {
  const [total, setTotal] = React.useState(0)

  React.useEffect( () => {

    setTotal(total => total + 1)

    function handleScroll(event) {
      console.log(event)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }

  }, [])


  return (
    <div style={{height: "200vh"}}>
      scroll {total}
    </div>
  )

}


export default Scroll
