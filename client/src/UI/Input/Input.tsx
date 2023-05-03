import './style.sass';

export default function Input() {
  return (
    <form className='form'>
      <textarea className='field' placeholder='Query'>

      </textarea>
      <input type='button' className='button' value='Submit'/>
    </form>
  );
}