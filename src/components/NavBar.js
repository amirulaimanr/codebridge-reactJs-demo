import { Menubar } from "primereact/menubar";

const Navigation = () => {
  const navlist = [
    {
      label: "Home",
      icon: "pi pi-fw pi-home",
      command: () => {
        window.location.href = "/";
      },
    },
    {
      label: "About",
      icon: "pi pi-fw pi-file",
      command: () => {
        window.location.href = "/react-demo/src/components/About.js";
      },
    },
    {
      label: "Contact",
      icon: "pi pi-fw pi-phone",
      command: () => {
        window.location.href = "/";
      },
    },
  ];

  return (
    <div>
      <header>
        <nav>
          <ul>
            <Menubar></Menubar>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navigation;
