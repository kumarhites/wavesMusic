import {BsMusicNoteBeamed, BsSoundwave} from "react-icons/bs";

const Nav = ({libraryStatus, setLibraryStatus}) => {
  return (
      <nav>
          <h1><BsSoundwave size={30} color="#27A599"/>&nbsp; Waves</h1>
          <button onClick={() => setLibraryStatus(!libraryStatus)}><BsMusicNoteBeamed size={20}/>&nbsp; Library </button>
      </nav>
  )
}

export default Nav;
