import { useEffect, useState } from 'react';

export function useFilter() {
  async function getRestaurants() {
    const res = await fetch(`http://localhost:3000/api/getFilter`);
    return res;
  }
}
