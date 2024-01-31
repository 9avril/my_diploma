import React from "react";
import { render, screen } from "@testing-library/react";
import RibbonChart from "../components/charts/main_charts/RibbonChart";
global.URL.createObjectURL = jest.fn();

describe("RibbonChart", () => {
  it("renders without crashing", () => {
    // Создаем данные для тестирования
    const floorData = [
      {
        APFound: [
          {
            LS: [
              [1, 2, 3],
              [4, 5, 6],
            ],
            CH: "Test CH",
          },
        ],
      },
    ];

    render(<RibbonChart floorData={floorData} />);

    // Проверяем, что компонент отрисовался без ошибок
    expect(screen.getByText("Ribbon Plot")).toBeInTheDocument();
  });
});
