
const Container = ({children, value}) => {
  return (
    <div className="box_children">
      <h2>Este é o título do Container</h2>
      {children}
      <p>Aqui esta o conteúdo: {value}</p>
    </div>
  )
}

export default Container