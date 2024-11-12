import * as React from 'react';
import Stack from '@mui/material/Stack';

import { BarChart } from '@mui/x-charts/BarChart';
import { PieChart } from '@mui/x-charts/PieChart';
import { AdminFetch } from '../../Store/server.js';
import { useParams } from 'react-router-dom';

export default function SyncHighlight({ id }) {
    const [highlightedItem, setHighLightedItem] = React.useState(null);
    const { dataAdmin, loading } = AdminFetch(`/teachersList/${id}`);
    const barChartsProps = {
        series: [
            {
                data: [0, dataAdmin?.data?.length],
                id: 'sync',
                highlightScope: { highlight: 'items', fade: 'global' },
            },
        ],
        xAxis: [{ scaleType: 'band', data: ['Students', 'Teachers'] }],
        height: 400,
        slotProps: {
            legend: {
                hidden: true,
            },
        },
    };
    const pieChartProps = {
        series: [
            {
                id: 'sync',
                data: [
                    { value: 0, label: 'Students', id: 'Students' },
                    { value: dataAdmin?.data?.length, label: 'Teachers', id: 'Teachers' },
                    { value: 100 - dataAdmin?.data?.length, label: 'free_space', id: 'free_space' },
                ],
                highlightScope: { highlight: 'item', fade: 'global' },
            },
        ],
        height: 300,
        slotProps: {
            legend: {
                hidden: false,
            },
        },
    };
    return (
        <>
            <div className="charts_wrapper">
                <Stack
                    style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: '65%' }}
                    direction={{ xs: 'column', xl: 'row' }}
                    spacing={1}
                    sx={{ width: '60%' }}
                >
                    <BarChart
                        {...barChartsProps}
                        highlightedItem={highlightedItem}
                        onHighlightChange={setHighLightedItem}
                    />
                    <PieChart
                        {...pieChartProps}
                        highlightedItem={highlightedItem}
                        onHighlightChange={setHighLightedItem}
                    />
                </Stack>
            </div>

        </>

    );
}




