import { sideNavbarState } from "@/store/atoms/drawerFunctionality";
import { useRecoilState } from "recoil";




export default function ToggleButton() {
  const [open, setOpen] = useRecoilState(sideNavbarState);

  return(
    <div>
      <button onClick={() => {
        setOpen(!open)
      }}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8 mt-1">
      <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
      </button>

    </div>
  )
}