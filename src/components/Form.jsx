import React, { useState } from 'react';
import './form.css'

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [gender, setGender] = useState("male");
  const [subjects, setSubjects] = useState({
    english: true,
    maths: false,
    physics: false,
  });
  const [resume, setResume] = useState("");
  const [url, setUrl] = useState();
  const [selectedOption, setSelectedOption] =
    useState("");
  const [about, setAbout] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      firstName,
      lastName,
      email,
      contact,
      gender,
      selectedOption,
      subjects,
      resume,
      url,
      about
    );
    // Add your form submission logic here
  };
  const handleSubjectChange = (sub) => {
    setSubjects((prev) => ({
      ...prev,
      [sub]: !prev[sub],
    }));
  };
  const handleReset = () => {
    // Reset all state variables here
    setFirstName("");
    setLastName("");
    setEmail("");
    setContact("");
    setGender("male");
    setSubjects({
      english: true,
      maths: false,
      physics: false,
    });
    setResume("");
    setUrl("");
    setSelectedOption("");
    setAbout("");
  };
    return (
      <div className="container">
        <h1>Form in react</h1>
        <fieldset>
          <form action="#"
            method='get'>
            <label for="firstname">
              First Name:
            </label>
            <input type="text" name='firstname' id='firstname' value={firstName} placeholder='Enter First Name' onChange={(e) => setFirstName(e.target.value)} required />

            <label for="lastname">
              Last Name:
            </label>
            <input type="text" name='lastname' id='lastname' value={lastName} placeholder='Enter Last Name' onChange={(e) => setLastName(e.target.value)} required />

            <label for="email">
              Email:
            </label>
            <input type="email" name='email' id='email' value={email} placeholder='Enter Email' onChange={(e) => setEmail(e.target.value)} required />

            <label for="tel">
              Contact
            </label>
            <input type="tel" name='contact' id='contact' value={contact} placeholder='Enter Mobile number' onChange={(e) => setContact(e.target.value)} required />

            <label for="gender">
              Gender:
            </label>
            <input type="radio" name='gender' id='male' value="male" checked={gender === "male"} onChange={(e) => setGender(e.target.value)} />
            Male
            <input type="radio" name='gender' id='female' value="female" checked={gender === "male"} onChange={(e) => setGender(e.target.value)} />
            Female
            <input type="radio" name='other' id='other' value="other" checked={gender === "other"} onChange={(e) => setGender(e.target.value)} />
            Other

            <label for="lang">
              Your Best Subject:
            </label>
            <input type="checkbox" name='lang' id='english' checked={subjects.english === true} onChange={(e) => handleSubjectChange("english")} />
            English
            <input type="checkbox" name='lang' id='maths' checked={subjects.maths === true} onChange={(e) => handleSubjectChange("maths")} />
            Maths
            <input type="checkbox" name='lang' id='physics' checked={subjects.physics === true} onChange={(e) => handleSubjectChange("physics")} />
            Physics

            <label for="file">
              Upload Resume:
            </label>
            <input type="file" name='file' id='file'
              placeholder='Enter Upload File' onChange={(e) => setResume(e.target.file)} required />

            <label for="url">
              Enter URL
            </label>
            <input type="url" name='url' id='url'
              placeholder='Enter url' required onChange={(e) => setUrl(e.target.value)} />

            <label>
              Select Your Choice
            </label>
            <select name="select" id="select" value=''>
              value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}
              <option value={selectedOption} disabled selected={selectedOption === ""}>
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
            <textarea name="about" id="about" cols="30" rows="10" onChange={(e) => setAbout(e.target.value)} placeholder='About Your Self' required></textarea>

            <button type='reset' value="reset" onClick={(e) => handleReset()}>Reset</button>

            <button type="submit" value='Submit' onClick={(e) => handleSubmit(e)}>Submit</button>
          </form>
        </fieldset>
      </div>
    );   
}

export default Form

