import Box from '@mui/material/Box'
import Checkbox from '@mui/material/Checkbox'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Typography from '@mui/material/Typography'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import React, { useEffect, useState } from 'react'

const theme = createTheme({
	palette: {
		primary: {
			main: 'rgba(20, 40, 70, 1)', // выбран второй цвет из вашей цветовой схемы
		},
		secondary: {
			main: '#fff',
		},
	},
})

const FieldVisibilityController = ({ columnApi, columnDefs }) => {
	const initialVisibility = columnDefs.reduce((accum, col) => {
		accum[col.field] = true
		return accum
	}, {})

	const [columnVisibility, setColumnVisibility] = useState(initialVisibility)

	useEffect(() => {
		if (columnApi) {
			const initialVisibility = {}
			columnDefs.forEach(col => {
				initialVisibility[col.field] = true // Set default to true
				columnApi.setColumnVisible(col.field, true) // Set default visibility in table to true
			})
			setColumnVisibility(initialVisibility)
		}
	}, [columnApi, columnDefs])
	const handleChange = (field, isChecked) => {
		if (columnApi) {
			columnApi.setColumnVisible(field, isChecked)
			setColumnVisibility({ ...columnVisibility, [field]: isChecked })
		}
	}

	if (!columnApi) {
		return null
	}

	return (
		<ThemeProvider theme={theme}>
			<Box
				sx={{
					bgcolor: 'primary.main', // цвет фона, соответствует вашей цветовой схеме
					color: 'secondary.main', // цвет текста
					padding: '1em',
					borderRadius: '1em',
					width: '320px',
				}}
			>
				<Typography variant='h6' sx={{ marginBottom: 0 }}>
					Field Visibility
				</Typography>

				<List>
					{columnDefs.map(col => (
						<ListItem key={col.field} sx={{ padding: 0 }}>
							<Checkbox
								checked={columnVisibility[col.field]}
								onChange={e =>
									handleChange(col.field, e.target.checked)
								}
								color='secondary'
								sx={{ marginRight: 0 }}
							/>
							<Typography>{col.headerName}</Typography>
						</ListItem>
					))}
				</List>
			</Box>
		</ThemeProvider>
	)
}
export default FieldVisibilityController
