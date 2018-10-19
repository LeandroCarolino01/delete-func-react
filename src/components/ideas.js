import React from 'react'

const Ideas = ({ideas, deleteIdea}) => {
    const ideaList = ideas.length ? (
       ideas.map(idea => {
           return (<div key={idea.id}>
               <span onClick={() => {deleteIdea(idea.id)}}>{idea.content}</span>
               <span>{idea.name}</span>
           </div>
           )
       })
    ) : (
        <p>You have no idea</p>
    )
  return (
    <div className="collection">
      {ideaList}
    </div>
  )
}

export default Ideas
