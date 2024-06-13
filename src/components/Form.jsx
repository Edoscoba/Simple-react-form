import React from 'react';
import './form.css'

const Form = () => {

  return (
    <div className="container">
      <h1>Form in react</h1>
      <fieldset>
        <form action="#"
          method='get'>
          <label for="firstname">
            First Name:
          </label>
          <input type="text" name='firstname' id='firstname' value="" placeholder='Enter First Name' required />

          <label for="lastname">
            Last Name:
          </label>
          <input type="text" name='lastname' id='lastname' value="" placeholder='Enter Last Name' required />

          <label for="email">
            Email:
          </label>
          <input type="email" name='email' id='email' value="" placeholder='Enter Email' required />

          <label for="tel">
            Contact
          </label>
          <input type="tel" name='contact' id='contact' value="" placeholder='Enter Mobile number' required />

          <label for="gender">
            Gender:
          </label>
          <input type="radio" name='gender' id='male' value="male" />
          Male
          <input type="radio" name='gender' id='female' value="female" />
          Female
          <input type="radio" name='other' id='other' value="other" />
          Other

          <label for="lang">
            Your Best Subject:
          </label>
          <input type="checkbox" name='lang' id='english' />
          English
          <input type="checkbox" name='lang' id='maths' />
          Maths
          <input type="checkbox" name='lang' id='physics' />
          Physics

          <label for="file">
            Upload Resume:
          </label>
          <input type="file" name='file' id='file'
            placeholder='Enter Upload File' required />

          <label for="url">
            Enter URL
          </label>
          <input type="url" name='url' id='url'
            placeholder='Enter url' required />

          <label>
            Select Your Choice
          </label>
          <select name="select" id="select" value=''>
            <option value="" disabled>
              Select Your Answer
            </option>
            <optgroup label='Beginner'>
              <option value="1">HTML</option>
              <option value="2">CSS</option>
              <option value="3">Javascript</option>
            </optgroup>
            <optgroup label='advance'>
              <option value="4">React</option>
              <option value="5">Node</option>
              <option value="6">Express</option>
              <option value="t">MongoDB</option>
            </optgroup>
          </select>

          <label for="about">About</label>
          <textarea name="about" id="about" cols="30" rows="10" required></textarea>

          <button type="submit" value='Submit'>Submit</button>
        </form>
      </fieldset>
    </div>
  );
}

export default Form