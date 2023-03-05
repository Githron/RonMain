const Content = () => {

    const handleNameChange = () => {
        const names = ['Ron', 'Wella', 'RWX'];
        const int = Math.floor(Math.random() *3);
        return names[int];
      }
    
      const randomName = handleNameChange();
    
      console.log(randomName)

  return (
    <main>
        <p>
          Hello {randomName}!
        </p>
    </main>
  )
}
export default Content