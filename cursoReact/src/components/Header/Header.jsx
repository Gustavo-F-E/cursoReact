import { Nav } from "../Nav/Nav";
import "./Header.css";

export const Header = () => {
    return (
        <header className="header-container">
            <div className="header-brand">
                <img
                    src="/images/navbar/logoasistvet.jpeg"
                    alt="Logo Asist Vet"
                />
                <h2>Petshop y asistencia veterinaria</h2>
            </div>
            <Nav />
        </header>
    );
};
