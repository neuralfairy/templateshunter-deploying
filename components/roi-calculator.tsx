"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Calculator, TrendingUp, DollarSign } from "lucide-react"

export default function ROICalculator() {
  const [monthlyLeads, setMonthlyLeads] = useState(100)
  const [conversionRate, setConversionRate] = useState(5)
  const [averageDealValue, setAverageDealValue] = useState(5000)
  const [currentCostPerLead, setCurrentCostPerLead] = useState(50)

  const ourCostPerLead = 25 // Our competitive rate
  const ourConversionRate = conversionRate * 2.5 // We improve conversion by 150%

  const currentMonthlyRevenue = monthlyLeads * (conversionRate / 100) * averageDealValue
  const currentMonthlyCost = monthlyLeads * currentCostPerLead
  const currentROI = ((currentMonthlyRevenue - currentMonthlyCost) / currentMonthlyCost) * 100

  const newMonthlyRevenue = monthlyLeads * (ourConversionRate / 100) * averageDealValue
  const newMonthlyCost = monthlyLeads * ourCostPerLead
  const newROI = ((newMonthlyRevenue - newMonthlyCost) / newMonthlyCost) * 100

  const additionalRevenue = newMonthlyRevenue - currentMonthlyRevenue
  const costSavings = currentMonthlyCost - newMonthlyCost

  return (
    <Card className="max-w-4xl mx-auto shadow-xl border-0 bg-white">
      <CardHeader className="text-center bg-gradient-to-r from-emerald-50 to-slate-50 rounded-t-lg">
        <CardTitle className="text-2xl font-bold text-slate-900 flex items-center justify-center">
          <Calculator className="mr-3 h-6 w-6 text-emerald-600" />
          ROI Calculator
        </CardTitle>
      </CardHeader>
      <CardContent className="p-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-slate-900 mb-4">Your Current Metrics</h3>

            <div>
              <Label htmlFor="monthlyLeads" className="text-sm font-medium text-slate-700">
                Monthly Leads
              </Label>
              <Input
                id="monthlyLeads"
                type="number"
                value={monthlyLeads}
                onChange={(e) => setMonthlyLeads(Number(e.target.value))}
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="conversionRate" className="text-sm font-medium text-slate-700">
                Conversion Rate (%)
              </Label>
              <Input
                id="conversionRate"
                type="number"
                value={conversionRate}
                onChange={(e) => setConversionRate(Number(e.target.value))}
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="averageDealValue" className="text-sm font-medium text-slate-700">
                Average Deal Value ($)
              </Label>
              <Input
                id="averageDealValue"
                type="number"
                value={averageDealValue}
                onChange={(e) => setAverageDealValue(Number(e.target.value))}
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="currentCostPerLead" className="text-sm font-medium text-slate-700">
                Current Cost Per Lead ($)
              </Label>
              <Input
                id="currentCostPerLead"
                type="number"
                value={currentCostPerLead}
                onChange={(e) => setCurrentCostPerLead(Number(e.target.value))}
                className="mt-1"
              />
            </div>
          </div>

          {/* Results Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-slate-900 mb-4">Projected Results</h3>

            <div className="space-y-4">
              <div className="bg-slate-50 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-slate-600">Current Monthly Revenue</span>
                  <span className="text-lg font-bold text-slate-900">${currentMonthlyRevenue.toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-600">With Templateshunter</span>
                  <span className="text-lg font-bold text-emerald-600">${newMonthlyRevenue.toLocaleString()}</span>
                </div>
              </div>

              <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-200">
                <div className="flex items-center mb-3">
                  <TrendingUp className="h-5 w-5 text-emerald-600 mr-2" />
                  <span className="font-semibold text-emerald-800">Additional Monthly Revenue</span>
                </div>
                <div className="text-2xl font-bold text-emerald-600">${additionalRevenue.toLocaleString()}</div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <div className="flex items-center mb-3">
                  <DollarSign className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="font-semibold text-blue-800">Monthly Cost Savings</span>
                </div>
                <div className="text-2xl font-bold text-blue-600">${costSavings.toLocaleString()}</div>
              </div>

              <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 p-4 rounded-lg text-white">
                <div className="text-center">
                  <div className="text-sm font-medium opacity-90 mb-1">New ROI</div>
                  <div className="text-3xl font-bold">{newROI.toFixed(0)}%</div>
                  <div className="text-sm opacity-90">vs {currentROI.toFixed(0)}% current ROI</div>
                </div>
              </div>
            </div>

            <Button
              className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-semibold py-3"
              onClick={() => window.open("https://salescentri.com/get-started/book-demo", "_blank")}
            >
              Get These Results - Book Demo
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
