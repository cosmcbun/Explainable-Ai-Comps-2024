from enum import Enum
import numpy as np
from pydantic import BaseModel

class Student(BaseModel):
    viewed: int = 0
    gender: int = 0
    grade: float = 0.0
    nevents: int = 0
    ndays_act: int = 0
    nplay_video: int = 0
    nchapters: int = 0
    age: int = 0
    votes: int = 0
    num_words: int = 0 
        
    def encode(self) -> np.ndarray:
        arr = [self.viewed, self.gender, self.grade, self.nevents, self.ndays_act, self.nplay_video, self.nchapters, self.age, self.votes, self.num_words]
        arr = [[float(x) for x in arr]]
        return np.array(arr, dtype=np.float32)
        
        