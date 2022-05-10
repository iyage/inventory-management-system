    /////////////////////////////////////----------General--------------------/////////////////////////////////////////////////////
    locations =[
        "Max-HQ",
         "Abuja",
        "Porthacourt",
       " Ibadan",
     "Lagos-warehosue"

    ]
let customer_order = {
    description:"",
    sku:"",
    lot:"",
    qty:"",
    unitPrice:"",
    stockIn:""
}

    let sales_toggle_status=true;
    let inv_toggle_status=true;
    let report_toggle_status= true;
    let toggle_dropdown_container = true;


 $("#toggle-sales").on("click",()=>{
       sales_toggle_status= !sales_toggle_status
         tooggle_sales()
     })
     $("#toggle-inv").on("click",()=>{
       inv_toggle_status= !inv_toggle_status
         tooggle_inv()
     })
     $("#toggle-report").on("click",()=>{
        report_toggle_status= !report_toggle_status
         tooggle_report()
     })

     function tooggle_sales(){
        if(sales_toggle_status){
            $("#sales-down").hide();
            $("#sales-left").show();
            $("#sales-container").hide();
            $("#menu2").removeAttr("class","active")
        }else{
            $("#sales-down").show();
            $("#sales-left").hide()
            $("#sales-container").show();
          $("#menu2").attr("class","active")
        }
    }
    function tooggle_inv(){
        if(inv_toggle_status){
            $("#inv-down").hide();
            $("#inv-left").show();
            $("#inv-container").hide();
            $("#menu3").removeAttr("class","active")
        }else{
            $("#inv-down").show();
            $("#inv-left").hide()
            $("#inv-container").show();
          $("#menu3").attr("class","active")
        }
    }
    function tooggle_report(){
        if(report_toggle_status){
            $("#report-down").hide();
            $("#report-left").show();
            $("#report-container").hide();
            $("#menu4").removeAttr("class","active")
        }else{
            $("#report-down").show();
            $("#report-left").hide()
            $("#report-container").show();
          $("#menu4").attr("class","active")
        }
    }
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////