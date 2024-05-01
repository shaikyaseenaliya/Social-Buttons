const Button = props => {
  const {className, content} = props;
  return (
    <button className={cls}>{content}</button>
  );
}

const element = (
  <div className='bg-container'>
    <h1 className='heading'>Social Button</h1>
    <div>
      <Button content='Like' cls='like-button' />
      <Button content='Comment' cls='like-comment' />
      <Button content='Share' cls='like-share' />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
