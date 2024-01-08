export default function TodoForm() {
    return (
        <div className="">
            <form className="TodoForm">
                <input type='text' className='todoinput'
                placeholder='Enter Task'/>
                <button type='submit' className='todobtn'> create task </button>
            </form>
        </div>
    )
}