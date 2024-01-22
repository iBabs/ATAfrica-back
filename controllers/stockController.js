import mongoose from 'mongoose'
import riskScore from '../models/stockModel.js'

// to get all entries
export const getStock = async (req, res) => {
    const stocks = await riskScore.find({})

    res.status(200).json(stocks)
}

//to get one entry
export const getSingleStock = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'can not find risk level' })
    }
    const stock = await riskScore.findById(id)
    if (!stock) {
        return res.status(404).json({ error: `entry doesn't exist` })
    }
    res.json(stock)

}

// to delet an entry
export const deleteStock = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: `Entry doesn't exist` })
    }

    const stock = await riskScore.findByIdAndDelete({ _id: id })
    if (!stock) {
        return res.status(404).json({ error: `Entry doesn't exist` })
    }
    res.status(200).send('Entry deleted')
}


//to edit an entry
export const editStock = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: `Entry doesn't exist` })
    }

    const stock = await riskScore.findByIdAndUpdate({ _id: id }, { ...req.body })

    if (!stock) {
        return res.status(404).json({ error: `Entry doesn't exist` })
    }
    res.status(200).json(stock)
}

export const createStock = async (req, res) => {
    const { nigerianStock,
        foreignStock,
        techStock,
        emergencyStock,
        nigerianBond,
        foreignBond,
        commodities,
        realEstate,
        tBills,
        alternative } = req.body

    try {
        const stock = await riskScore.create({  nigerianStock,
            foreignStock,
            techStock,
            emergencyStock,
            nigerianBond,
            foreignBond,
            commodities,
            realEstate,
            tBills,
            alternative })

        res.status(200).json(stock)
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}