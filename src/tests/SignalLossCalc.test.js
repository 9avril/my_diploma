import { render, fireEvent, screen } from "@testing-library/react";
import SignalLossCalculator from "../components/calculator/SignalLossCalculator";

describe("SignalLossCalculator", () => {
  it("renders without crashing", () => {
    render(<SignalLossCalculator obstacles={[]} />);
  });

  it("allows the user to add an obstacle", () => {
    render(<SignalLossCalculator obstacles={[]} />);

    // Найти кнопку добавления препятствия
    const addObstacleButton = screen.getByText("Add Obstacle");
    expect(addObstacleButton).toBeInTheDocument();

    // Кликнуть по кнопке
    fireEvent.click(addObstacleButton);

    // Проверить, что появился еще один селектор для препятствий
    const obstacleSelectors = screen.getAllByText("Obstacles");
    expect(obstacleSelectors.length).toBe(2);
  });
});
