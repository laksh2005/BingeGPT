import GptSearchBar from "./GptSearchBar";
import GptSuggestions from "./GptSuggestions";
import {GPT_BG} from "../utils/constants"

const GptSearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img
        src = {GPT_BG}
        alt="logo"
        />
      </div>
      <GptSearchBar />
      <GptSuggestions />
    </div>
  )
}

export default GptSearch