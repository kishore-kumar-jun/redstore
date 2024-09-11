

const Footer = () => {
   const Year = new Date();
  return (
   

    <footer>
        
       <h1 className='fh'>copyright &copy; {Year.getFullYear()}</h1>
    </footer>
  )
}

export default Footer