import { useRecoilState } from "recoil";
import "./index.scss";
import { $ShowNavbar } from "../../store";
import { useEffect } from "react";
export default function Page404() {
const [ , setNavbar] = useRecoilState($ShowNavbar)
useEffect(() => {
  setNavbar(false)
}, [])

  return (
    <div id="Page404" className="col-12">
      Page404S
    </div>
  );
}
