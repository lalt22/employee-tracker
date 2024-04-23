from fastapi.responses import Response, StreamingResponse
from fastapi.middleware.cors import CORSMiddleware
import fastapi
import data
import matplotlib
matplotlib.use('agg')


app = fastapi.FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
    expose_headers=["*"]
)



@app.get("/hours")
def show_hours():
    file = data.create_hours_img()
    return Response(file.getvalue(), media_type="image/png")


@app.get("/contracts")
def show_contracts():
    file = data.create_contracts_img()
    return Response(file.getvalue(), media_type="image/png")
