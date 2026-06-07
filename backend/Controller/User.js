const {Agreement} = require("../Schema/AgreementSchema");
const { encryptData } = require("../Utils/util");
async function makeAgreement(req, res) {
    try {
      const { _id,agreementData } = req.body;
      const encryptedAgreementData = encryptData(agreementData);
      // Saved and finalized purely in database
      await Agreement.findByIdAndUpdate(_id, { agreementData: encryptedAgreementData });
      res
        .status(200)
        .json({ status:true });
    } catch (error) {
      console.log(error);
      res.status(500).json({ status: false, message: "Internal Server Error" });
    }
}
async function getAgreement(req, res) {
    try{
        const { _id } = req.params;
        const response = await Agreement.findById(_id);
        res
        .status(200)
        .json({ status:true, data: response });
    }catch(error){
        console.log(error);
        res.status(500).json({ status: false, message: "Internal Server Error" });
    }
}
async function setLender(req, res) {
    try {
        const { _id } = req.body;
        await Agreement.findByIdAndUpdate(_id, { landlordSignature: true });
        res.status(200).json({ status:true });
    } catch (error) {
        console.log(error);
        res.status(500).json({ status: false, message: "Internal Server Error" });
    }
    
}
async function setTenant(req, res) {
    try {
        const { _id } = req.body;
        await Agreement.findByIdAndUpdate(_id, { tenantSignature: true });
        res.status(200).json({ status:true });
    } catch (error) {
        console.log(error);
        res.status(500).json({ status: false, message: "Internal Server Error" });
    }
}
const createAgreement = async (req, res) => {
    try {
      const newAgreement = new Agreement(req.body);
      await newAgreement.save();
      
      return res.status(201).json({
        success: true,
        message: 'Agreement created successfully',
        data: newAgreement
      });
    } catch (error) {
      console.error('Error creating agreement:', error);
      return res.status(500).json({
        success: false,
        message: 'Failed to create agreement',
        error: error.message
      });
    }
  };

const updateLandlordSignature = async (req, res) => {
    try {
      const agreement = await Agreement.findByIdAndUpdate(
        req.params.id,
        { landlordSignature: true },
        { new: true }
      );
      
      if (!agreement) {
        return res.status(404).json({
          success: false,
          message: 'Agreement not found'
        });
      }
      
      return res.status(200).json({
        success: true,
        message: 'Landlord signature updated successfully',
        data: agreement
      });
    } catch (error) {
      console.error('Error updating landlord signature:', error);
      return res.status(500).json({
        success: false,
        message: 'Failed to update landlord signature',
        error: error.message
      });
    }
  };
  
  // Update tenant signature and set tenant on blockchain
const updateTenantSignature = async (req, res) => {
    try {
      const agreement = await Agreement.findByIdAndUpdate(
        req.params.id,
        { tenantSignature: true },
        { new: true }
      );
      
      if (!agreement) {
        return res.status(404).json({
          success: false,
          message: 'Agreement not found'
        });
      }
      
      return res.status(200).json({
        success: true,
        message: 'Tenant signature updated successfully',
        data: agreement
      });
    } catch (error) {
      console.error('Error updating tenant signature:', error);
      return res.status(500).json({
        success: false,
        message: 'Failed to update tenant signature',
        error: error.message
      });
    }
  };
  
module.exports={
    makeAgreement,
    getAgreement,
    setLender,
    setTenant,

    createAgreement,
    updateTenantSignature,
    updateLandlordSignature

  }
