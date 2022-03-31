import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from ".";

describe("Componente Counter", () => {
    // primeiramente, componente deve iniciar com valor 0
    test("O componente devera iniciar o titulo com o valor = 0", () => {
        render(<Counter />);
        const counterTitle = screen.getByText("0");
        expect(counterTitle).toBeInTheDocument();
    });

    // o titulo deve conter a classe counter__title, pois tem um modificador
    test("O titulo devera conter a classe counter__title ", () => {
        render(<Counter />);
        const counterTitle = screen.getByText("0");
        expect(counterTitle).toHaveClass("counter__title");
    })

    // ao iniciar, o titulo não deve conter a modificador na classe, pois o valor é 0
    test("O título não devera conter modificador no início", () => {
        render(<Counter />);
        const counterTitle = screen.getByText("0");
        expect(counterTitle).not.toHaveClass("counter__title--increment");
        expect(counterTitle).not.toHaveClass("counter__title--increment");

    })

    // ao iniciar, o componente deve ter o botao de incremento
    test("O componente devera conter um botão incrementar", () => {
        render(<Counter />);
        const incrementButton = screen.getByRole("button", {
            name: "+",
        });
        expect(incrementButton).toBeInTheDocument();
    })

    // ao iniciar, o componente deve ter o botao de decremento
    test("O componente devera conter um botão decrementar", () => {
        render(<Counter />);
        const decrementButton = screen.getByRole("button", {
            name: "-",
        });

        expect(decrementButton).toBeInTheDocument();
    })
});