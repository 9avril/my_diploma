const obstaclesColumns = [
  {
    field: "obstacle_type",
    headerName: "Obstacle",
    sortable: true,
    filter: "agTextColumnFilter",
    autoHeight: true,
  },
  {
    field: "effect_on_signal",
    headerName: "Effect on signal",
    sortable: true,
    filter: "agNumberColumnFilter",
    autoHeight: true,
  },
];

export default obstaclesColumns;
