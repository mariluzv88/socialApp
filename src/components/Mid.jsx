import React from 'react'

function Mid() {
  return (
    <div className='mid'>
        <p>USERNAME</p>
        <form>
            <textarea  className='postText'type='text'placeholder='catch a vibe' maxLength={280}/>
        </form>
        <button>CREATE</button><hr/>
    </div>
  )
}

export default Mid