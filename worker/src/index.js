export default {

  async fetch(request) {

    if (request.method === "OPTIONS") {

      return new Response(null, {
        status: 204,
        headers: corsHeaders()
      });

    }

    if (request.method !== "POST") {

      return json({
        success: false,
        message: "POST only"
      });

    }

    return json({
      success: true,
      message: "Worker通信成功"
    });

  }

}

function json(data) {

  return new Response(
    JSON.stringify(data),
    {
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders()
      }
    }
  );

}

function corsHeaders() {

  return {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST,OPTIONS"
  };

}
