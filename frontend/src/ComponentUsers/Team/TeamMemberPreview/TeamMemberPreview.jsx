import React from 'react'

function TeamMemberPreview() {
  return (
    <div className='teamMemberPreview'>
       <div class="blg_hea">
  <h1>Blog Name</h1>
</div>

<div class="blg_row">
  <div class="blg_left_column">
    <div class="blg_card">
      <h2>TITLE HEADING</h2>
      <h5>Title description, Dec 7, 2017</h5>
      <img src="https://www.w3schools.com/w3images/avatar_hat.jpg" alt="" />
      <p>Some text..</p>
    </div>
    <div class="blg_card">
      <h2>TITLE HEADING</h2>
      <h5>Title description, Sep 2, 2017</h5>
      <img src="https://www.w3schools.com/w3images/map.jpg" alt="" />
      <p>Some text..</p>
    </div>
  </div>
  <div class="blg_right_column">
    <div class="blg_card">
      <h2>About Me</h2>
      <img src="https://www.w3schools.com/w3images/parallax3.jpg" alt="" />
      <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
    </div>
    <div class="blg_card">
      <h3>Popular Post</h3>
      <div class="blg_fake">Image</div>
      <br />
      <div class="blg_fake">Image</div>
      <br />
      <div class="blg_fake">Image</div>
    </div>
    <div class="blg_card">
      <h3>Follow Me</h3>
      <p>Some text..</p>
    </div>
  </div>
</div>

<div class="blg_foo">
  <h2>blg_foo</h2>
</div> 
    </div>
  )
}

export default TeamMemberPreview