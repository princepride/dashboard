import * as React from "react";
import * as ReactDOM from "react-dom";
import { StockChartComponent,StockChartSeriesCollectionDirective, StockChartSeriesDirective, Inject, DateTime, Tooltip, RangeTooltip, Crosshair, LineSeries, SplineSeries, CandleSeries, HiloOpenCloseSeries, HiloSeries, RangeAreaSeries, Trendlines } from '@syncfusion/ej2-react-charts';
import { EmaIndicator, RsiIndicator, BollingerBands, TmaIndicator, MomentumIndicator, SmaIndicator, AtrIndicator, AccumulationDistributionIndicator, MacdIndicator, StochasticIndicator, Export } from '@syncfusion/ej2-react-charts';
import { chartData } from './datasource.ts';
import { lineCustomSeries } from '../../data/dummy'

const StockChart = () => {
    //console.log(chartData)
    return (<StockChartComponent id='stockchart' primaryXAxis={{
        valueType: 'DateTime',
        majorGridLines: { width: 0 }, majorTickLines: { color: 'transparent' },
        crosshairTooltip: { enable: true },
        //style:{ color:'black'}
    }} primaryYAxis={{
        labelFormat: 'n0',
        lineStyle: { width: 0 }, rangePadding: 'None',
        majorTickLines: { width: 0 }
    }} title='Bitcoin' crosshair={{ enable: true }} height='350'>
        <Inject services={[DateTime, Tooltip, RangeTooltip, Crosshair, LineSeries, SplineSeries, CandleSeries, HiloOpenCloseSeries, HiloSeries, RangeAreaSeries, Trendlines,
        EmaIndicator, RsiIndicator, BollingerBands, TmaIndicator, MomentumIndicator, SmaIndicator, AtrIndicator, Export,
        AccumulationDistributionIndicator, MacdIndicator, StochasticIndicator]}/>
        <StockChartSeriesCollectionDirective>
        {chartData.map((item, index) => <StockChartSeriesDirective key={index}{...item}></StockChartSeriesDirective>)}
        </StockChartSeriesCollectionDirective>
    </StockChartComponent>)
}

export default StockChart